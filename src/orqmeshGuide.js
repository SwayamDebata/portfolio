export const GUIDE_NAV = [
  ["flow", "Flow"],
  ["install", "Install"],
  ["first-run", "A first run"],
  ["returns", "What a step returns"],
  ["review", "Human review"],
  ["async", "Async workflows"],
  ["tools", "Tools and agents"],
  ["checkpoints", "Checkpoints"],
  ["document", "Document review"],
  ["langgraph", "LangGraph"],
  ["azure", "Azure adapters"],
  ["reference", "SDK reference"],
  ["errors", "Errors"],
  ["limits", "Not in this version"],
];

export const GUIDE = [
  {
    id: "install",
    kicker: "01",
    title: "Install",
    blocks: [
      {
        type: "p",
        text: "Orqmesh 0.1.0b1 is an alpha library. Python 3.11 or later. The core install has no required third-party packages. A beta version is not installed by a bare name, so write the version out.",
      },
      { type: "code", text: 'python -m pip install "orqmesh==0.1.0b1"' },
      {
        type: "p",
        text: "From a checkout of the repository, the development extra installs pytest and ruff. That extra is for working on the package, not for using it.",
      },
      { type: "code", text: 'python -m pip install -e ".[dev]"\npython -m pytest\npython -m ruff check .' },
    ],
  },
  {
    id: "first-run",
    kicker: "02",
    title: "A first run",
    blocks: [
      {
        type: "p",
        text: "A workflow is a name and a list of named steps. Each step is a function. It receives a StepContext and returns a dictionary. run() writes a checkpoint before the first step, after every step, and when the run finishes.",
      },
      {
        type: "code",
        text: `from tempfile import TemporaryDirectory

from orqmesh import JsonFileCheckpointStore, Workflow, WorkflowStep


def prepare(context):
    return {"item_id": context.input["item_id"], "status": "ready"}


def summarize(context):
    item_id = context.outputs["prepare"]["item_id"]
    return {"message": "Prepared " + item_id}


workflow = Workflow(
    "prepare-item",
    [
        WorkflowStep("prepare", prepare),
        WorkflowStep("summarize", summarize),
    ],
)

with TemporaryDirectory() as directory:
    store = JsonFileCheckpointStore(directory)
    state = workflow.run("example-001", {"item_id": "demo"}, store)

print(state.status.value)
print(state.outputs["summarize"])`,
      },
      {
        type: "p",
        text: "That prints completed, then the summarize dictionary. The steps run in the order you listed them. summarize can read prepare because that output was saved before summarize was called. Use a new run id for every run. example-001 cannot be started twice in the same store.",
      },
    ],
  },
  {
    id: "returns",
    kicker: "03",
    title: "What a step returns",
    blocks: [
      {
        type: "p",
        text: "A step returns one of two things. A dictionary, which is stored under the step name. Or a ReviewRequest, which pauses the run. Anything else raises TypeError. The failure is written into the checkpoint and then raised again.",
      },
      {
        type: "ul",
        items: [
          "context.run_id is the id you passed to run().",
          "context.input is the dictionary you passed to run(). Do not treat it as a private copy. Nested values are the application's data.",
          "context.outputs maps each finished step name to the dictionary that step returned.",
          "Keys and values must be JSON. Strings, numbers, booleans, null, lists, and dictionaries. A checkpoint cannot store a client, a file handle, or a secret you would not put in a file.",
        ],
      },
    ],
  },
  {
    id: "review",
    kicker: "04",
    title: "Human review",
    blocks: [
      {
        type: "p",
        text: "Return a ReviewRequest when a person has to decide. The run stops. Later steps do not run. The checkpoint status is waiting_review, and pending_review holds the step name and the payload you supplied. The application has to authenticate the reviewer. The library only records the string you pass.",
      },
      {
        type: "code",
        text: `from tempfile import TemporaryDirectory

from orqmesh import (
    JsonFileCheckpointStore,
    ReviewDecision,
    ReviewRequest,
    RunStatus,
    Workflow,
    WorkflowStep,
)


def request_review(context):
    return ReviewRequest({"item_id": context.input["item_id"], "reason": "demo"})


def finish(context):
    review = context.outputs["review"]["review"]
    return {"decision": review["decision"]}


workflow = Workflow(
    "review-item",
    [
        WorkflowStep("review", request_review),
        WorkflowStep("finish", finish),
    ],
)

with TemporaryDirectory() as directory:
    store = JsonFileCheckpointStore(directory)
    state = workflow.run("review-001", {"item_id": "demo"}, store)
    assert state.status is RunStatus.WAITING_REVIEW

    state = workflow.resume(
        state.run_id,
        ReviewDecision.APPROVED,
        "demo-reviewer",
        store,
        comment="Looks right.",
    )
    assert state.status is RunStatus.COMPLETED
    print(state.outputs["finish"]["decision"])  # approved`,
      },
      {
        type: "p",
        text: "Approval writes a review record, stores it as the output of the paused step, and continues at the next step. The record has step, decision, reviewer, comment, and request. request is the payload from the ReviewRequest.",
      },
      {
        type: "p",
        text: "ReviewDecision.REJECTED ends the run as rejected. finish() is not called. The review record is still saved on the paused step. An empty reviewer string raises ValueError. resume() on a run that is not waiting raises ValueError. A missing checkpoint raises KeyError.",
      },
    ],
  },
  {
    id: "async",
    kicker: "05",
    title: "Async workflows",
    blocks: [
      {
        type: "p",
        text: "AsyncWorkflow is the same contract with await. Steps are async functions. The checkpoint store is still synchronous. Each load and save is sent to a worker thread so it does not sit on the event loop. That does not make the store safe for two workers.",
      },
      {
        type: "code",
        text: `import asyncio
from tempfile import TemporaryDirectory

from orqmesh import AsyncWorkflow, AsyncWorkflowStep, JsonFileCheckpointStore


async def prepare(context):
    return {"item_id": context.input["item_id"], "status": "ready"}


async def main():
    workflow = AsyncWorkflow("async-demo", [AsyncWorkflowStep("prepare", prepare)])
    with TemporaryDirectory() as directory:
        state = await workflow.run(
            "async-001",
            {"item_id": "demo"},
            JsonFileCheckpointStore(directory),
        )
        print(state.status.value)  # completed


asyncio.run(main())`,
      },
      {
        type: "p",
        text: "If you are already inside an event loop, await the workflow. Do not call asyncio.run() again. Review uses await workflow.resume(...) with the same arguments as the synchronous resume(). Cancellation is written as failed, with the error CancelledError: workflow execution was cancelled, and then re-raised. Steps still run one at a time.",
      },
    ],
  },
  {
    id: "tools",
    kicker: "06",
    title: "Tools and agents",
    blocks: [
      {
        type: "p",
        text: "A tool is a named function. It takes a dictionary and returns a JSON value. A registry is the only place those names exist. An agent receives an allowlist. call_tool() refuses a name that is not on that list. This is a convention in your process. It is not a sandbox, and it does not stop a handler from calling anything else in Python.",
      },
      {
        type: "code",
        text: `from orqmesh import Agent, Tool, ToolRegistry

registry = ToolRegistry([
    Tool("lookup", lambda args: {"found": args["key"]}, "Synthetic lookup"),
])

agent = Agent(
    name="example",
    allowed_tools=frozenset({"lookup"}),
    handler=lambda context: {
        "result": context.call_tool("lookup", {"key": "demo"}),
    },
)

print(agent.run({}, registry))
# {'result': {'found': 'demo'}}`,
      },
      {
        type: "ul",
        items: [
          "ToolRegistry.register() rejects an empty name and a duplicate name.",
          "invoke() raises KeyError if the name was never registered.",
          "names() returns the registered names in the order they were added.",
          "Agent.run() raises ValueError if the allowlist names a tool that is not in the registry.",
          "call_tool() raises PermissionError if the name is registered but not on this agent's list.",
          "The handler must return a dictionary. Otherwise Agent.run() raises TypeError.",
        ],
      },
      {
        type: "p",
        text: "An agent is not a workflow step until you call it from one. A step can build the registry, run the agent, and return the agent's dictionary. The registry itself is not stored in the checkpoint.",
      },
    ],
  },
  {
    id: "checkpoints",
    kicker: "07",
    title: "Checkpoints",
    blocks: [
      {
        type: "p",
        text: "CheckpointStore is two methods: load(run_id) and save(state). load returns a WorkflowState, or None if that id has never been saved. JsonFileCheckpointStore writes one JSON file per run, in the directory you pass. It creates the directory. The write goes to a temporary file, is flushed, and then replaces the real file.",
      },
      {
        type: "p",
        text: "A run id is 1 to 128 characters. It starts with a letter or digit. After that it may contain letters, digits, underscore, dot, and hyphen. The file name is that id plus .json.",
      },
      {
        type: "p",
        text: "The file is not encrypted. It is not locked across processes. Two workers saving the same id can overwrite each other. Do not put credentials, personal data, or a real document in it. A step can also do something outside the process, then fail before the checkpoint is saved. Running that step again can repeat the outside action. The library does not retry, and it does not make that action idempotent.",
      },
      {
        type: "p",
        text: "resume() does not check that the checkpoint was written by this workflow object. Keep the step list stable for the life of a run id.",
      },
    ],
  },
  {
    id: "document",
    kicker: "08",
    title: "Document review, step by step",
    blocks: [
      {
        type: "p",
        text: "The package includes one complete workflow, document_review. It does not read the document to decide anything, and it does not call a model. The caller sets requires_review. The input, including the content, is stored in the checkpoint. Use synthetic text.",
      },
      {
        type: "code",
        text: `from uuid import uuid4

from orqmesh import JsonFileCheckpointStore, ReviewDecision, RunStatus
from orqmesh.examples.document_review import build_document_review_workflow

workflow = build_document_review_workflow()
document = {
    "document_id": "DOC-2048",
    "title": "Example document",
    "content": "Synthetic content for a workflow demonstration.",
    "requires_review": True,
}
store = JsonFileCheckpointStore(".checkpoints")
state = workflow.run(
    f"document-demo-{uuid4().hex}",
    {"document": document},
    store,
)`,
      },
      {
        type: "h3",
        text: "validate_document",
      },
      {
        type: "p",
        text: "The input must contain a document object. document_id, title, and content must be nonempty strings. requires_review must be a boolean. The step returns those four fields, with the strings stripped. A bad input raises ValueError, the run is saved as failed, and the error is raised to you.",
      },
      {
        type: "h3",
        text: "review_document",
      },
      {
        type: "p",
        text: "If requires_review is false, the step returns decision auto_approved and reason review_not_required. The run does not pause. If requires_review is true, the step returns a ReviewRequest. The payload is reason review_requested and the validated document. Status becomes waiting_review. You print state.pending_review and stop until a person decides.",
      },
      {
        type: "code",
        text: `if state.status is RunStatus.WAITING_REVIEW:
    state = workflow.resume(
        state.run_id,
        ReviewDecision.APPROVED,
        reviewer="demo-reviewer",
        comment="Example only: simulated approval.",
        store=store,
    )`,
      },
      {
        type: "h3",
        text: "finalize_document",
      },
      {
        type: "p",
        text: "This step runs only after an approval, or after the automatic approval. It reads the review output. An approval record lives at review.decision. An automatic approval lives at decision. The value must be approved or auto_approved. The step then returns status ready, plus document_id, title, and approval. Rejection never reaches this step, so there is no final result.",
      },
      {
        type: "code",
        text: `print(state.status.value)
print(state.outputs.get("finalize_document"))
# completed
# {'status': 'ready', 'document_id': 'DOC-2048', 'title': 'Example document', 'approval': 'approved'}`,
      },
    ],
  },
  {
    id: "langgraph",
    kicker: "09",
    title: "LangGraph",
    blocks: [
      {
        type: "p",
        text: "LangGraph is not installed with Orqmesh. LangGraphAdapter calls an object you built. That object must have an async ainvoke(). The result must be a mapping. The adapter does not own the model, the graph, the tools, or the credentials.",
      },
      {
        type: "code",
        text: `import asyncio

from orqmesh import LangGraphAdapter


class Graph:
    async def ainvoke(self, input, config=None):
        return {"summary": "ready", "echo": input["text"]}


async def main():
    adapter = LangGraphAdapter(Graph())
    result = await adapter.ainvoke({"text": "demo"})
    print(result)  # {'summary': 'ready', 'echo': 'demo'}


asyncio.run(main())`,
      },
      {
        type: "p",
        text: "A compiled LangGraph graph is used the same way if it implements that method. Pass config only when you have one. A result that is not a mapping raises TypeError. Nested values are not checked or converted further. You decide which fields are safe to put in a checkpoint.",
      },
    ],
  },
  {
    id: "azure",
    kicker: "10",
    title: "Azure adapters",
    blocks: [
      {
        type: "p",
        text: "The Azure classes do not import the Azure SDKs and do not create clients. You construct the client, you authenticate it, and you pass it in. The wrappers are tested with fakes. They are not certified against a live SDK version. There is no Azure OpenAI adapter in this version.",
      },
      {
        type: "h3",
        text: "Blob",
      },
      {
        type: "p",
        text: "AzureBlobStore.read_bytes(container, blob) calls get_blob_client(container, blob), then await download_blob(), then await readall(). Both names must be nonempty. The whole blob is loaded into memory.",
      },
      {
        type: "h3",
        text: "Cosmos",
      },
      {
        type: "p",
        text: "AzureCosmosRepository.upsert(document) calls upsert_item(body=document) and requires a mapping back. query(query, parameters=None, partition_key=None) calls query_items and collects every row. The query string must be nonempty. Each row must be a mapping. partition_key is passed through only when you set it.",
      },
      {
        type: "h3",
        text: "Content Understanding",
      },
      {
        type: "p",
        text: "AzureContentUnderstandingAdapter.analyze_bytes(analyzer_id, content, content_type) calls the synchronous begin_analyze_binary on a worker thread, then poller.result() on a worker thread. If the result has as_dict, that is called too. The final value must be a mapping. analyzer_id and content_type must be nonempty, and content must not be empty. Retries, timeouts, and closing the client stay with you.",
      },
    ],
  },
  {
    id: "reference",
    kicker: "11",
    title: "SDK reference",
    blocks: [
      {
        type: "p",
        text: "These are the names exported by orqmesh. Import them from the package unless a note says otherwise.",
      },
      {
        type: "api",
        name: "Workflow",
        sig: "Workflow(name, steps)",
        text: "name is a nonempty string. steps is a nonempty list of WorkflowStep. Names must be nonempty and unique. .name and .steps are the values you passed, with steps stored as a tuple.",
      },
      {
        type: "api",
        name: "Workflow.run",
        sig: "run(run_id, input_data, store) -> WorkflowState",
        text: "Starts a run. Raises ValueError if that id is already in the store. Saves a running state, then advances until a review pause, a failure, or completion.",
      },
      {
        type: "api",
        name: "Workflow.resume",
        sig: "resume(run_id, decision, reviewer, store, comment=None) -> WorkflowState",
        text: "Loads the checkpoint. reviewer must be a nonempty string. The status must be waiting_review and pending_review must be set. Approval continues. Rejection saves rejected and returns.",
      },
      {
        type: "api",
        name: "WorkflowStep",
        sig: "WorkflowStep(name, run)",
        text: "name is the checkpoint key. run(context) returns a dictionary or a ReviewRequest.",
      },
      {
        type: "api",
        name: "StepContext",
        sig: "StepContext(run_id, input, outputs)",
        text: "Passed into every step. You do not construct it yourself. outputs is a dictionary of finished steps.",
      },
      {
        type: "api",
        name: "AsyncWorkflow",
        sig: "AsyncWorkflow(name, steps)",
        text: "Same construction rules as Workflow. run() and resume() are async and take the same arguments. Checkpoint calls go through asyncio.to_thread.",
      },
      {
        type: "api",
        name: "AsyncWorkflowStep",
        sig: "AsyncWorkflowStep(name, run)",
        text: "run is an async function with the same return rule as a synchronous step.",
      },
      {
        type: "api",
        name: "WorkflowState",
        sig: "run_id, status, input, outputs, next_step, pending_review, reviews, error",
        text: "The snapshot that gets saved. next_step is the index of the next step to run. to_dict() and from_dict() convert it to and from JSON. status is a RunStatus.",
      },
      {
        type: "api",
        name: "RunStatus",
        sig: "running, waiting_review, completed, rejected, failed",
        text: "The only statuses. Read them from state.status. The stored string is state.status.value.",
      },
      {
        type: "api",
        name: "ReviewRequest",
        sig: "ReviewRequest(payload)",
        text: "payload is a JSON dictionary. Returning one from a step sets pending_review to step and payload, and sets the status to waiting_review.",
      },
      {
        type: "api",
        name: "ReviewDecision",
        sig: "ReviewDecision.APPROVED, ReviewDecision.REJECTED",
        text: "The only decisions resume() accepts. The stored strings are approved and rejected.",
      },
      {
        type: "api",
        name: "CheckpointStore",
        sig: "load(run_id) -> WorkflowState | None; save(state) -> None",
        text: "The protocol a store must implement. Both methods are synchronous, including when an async workflow calls them.",
      },
      {
        type: "api",
        name: "JsonFileCheckpointStore",
        sig: "JsonFileCheckpointStore(directory)",
        text: "Local files. One JSON document per run id. Atomic replace. No encryption and no cross-process lock.",
      },
      {
        type: "api",
        name: "Tool",
        sig: "Tool(name, handler, description=\"\")",
        text: "handler(arguments) takes a dictionary and returns a JSON value. description is stored and not interpreted.",
      },
      {
        type: "api",
        name: "ToolRegistry",
        sig: "ToolRegistry(tools=None)",
        text: "register(tool), invoke(name, arguments), names(). invoke raises KeyError for an unknown name.",
      },
      {
        type: "api",
        name: "Agent",
        sig: "Agent(name, handler, allowed_tools=frozenset())",
        text: "run(input_data, registry) checks the allowlist against registry.names(), builds an AgentContext, and requires a dictionary back.",
      },
      {
        type: "api",
        name: "AgentContext.call_tool",
        sig: "call_tool(name, arguments)",
        text: "Raises PermissionError when name is not in the agent's allowlist. Otherwise calls the registry.",
      },
      {
        type: "api",
        name: "LangGraphAdapter",
        sig: "LangGraphAdapter(graph); await ainvoke(input_data, config=None)",
        text: "graph.ainvoke must be async and must return a mapping. Optional config is passed as a keyword argument.",
      },
      {
        type: "api",
        name: "AzureBlobStore",
        sig: "AzureBlobStore(client); await read_bytes(container, blob)",
        text: "Reads one blob fully into memory through the injected async client.",
      },
      {
        type: "api",
        name: "AzureCosmosRepository",
        sig: "upsert(document); query(query, parameters=None, *, partition_key=None)",
        text: "Both are async. upsert returns a mapping. query returns a list of mappings.",
      },
      {
        type: "api",
        name: "AzureContentUnderstandingAdapter",
        sig: "await analyze_bytes(analyzer_id, content, content_type)",
        text: "Runs the synchronous submit and poll methods on worker threads. Returns a mapping.",
      },
      {
        type: "api",
        name: "build_document_review_workflow",
        sig: "from orqmesh.examples.document_review import build_document_review_workflow",
        text: "Returns a Workflow named document_review with the steps validate_document, review_document, and finalize_document. Not exported from the top of the package.",
      },
    ],
  },
  {
    id: "errors",
    kicker: "12",
    title: "Errors",
    blocks: [
      {
        type: "p",
        text: "A step that raises is saved as failed. state.error is the exception type, a colon, and the message. The exception is then raised to the caller. The same happens for a bad return type. Do not put secrets in exception messages. They are written into the checkpoint.",
      },
      {
        type: "ul",
        items: [
          "ValueError: empty workflow name, no steps, empty or duplicate step names.",
          "ValueError: the run id already exists, or it is not a safe file name.",
          "ValueError: resume() when the run is not waiting, or the reviewer is blank.",
          "KeyError: resume() when no checkpoint exists for that id.",
          "KeyError: ToolRegistry.invoke() for an unregistered tool.",
          "PermissionError: call_tool() for a tool this agent may not use.",
          "ValueError: an allowlist name that the registry does not have.",
          "TypeError: a step, an agent, a LangGraph result, or an Azure result that is not a mapping.",
        ],
      },
    ],
  },
  {
    id: "limits",
    kicker: "13",
    title: "Not in this version",
    blocks: [
      {
        type: "p",
        text: "0.1.0b1 is the spine. The design note describes a larger framework. These are not in the package, and the guide does not pretend they are.",
      },
      {
        type: "ul",
        items: [
          "Branching, fan-out, loops, retries, and timeouts.",
          "Distributed checkpoints, encryption, and more than one worker on a run.",
          "Idempotent side effects, or a guarantee that an outside action happened exactly once.",
          "A model adapter, including Azure OpenAI.",
          "Authentication, authorization, redaction, and an audit log.",
          "A user interface, a queue, or a hosted service.",
          "A certificate that the Azure or LangGraph wrappers match a particular live SDK.",
        ],
      },
    ],
  },
];
