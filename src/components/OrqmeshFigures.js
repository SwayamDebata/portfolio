import React from "react";

function Node({ kicker, title, text, pause = false }) {
  return (
    <div className={pause ? "node is-pause" : "node"}>
      <span>{kicker}</span>
      <strong>{title}</strong>
      <p>{text}</p>
    </div>
  );
}

function Edge({ label }) {
  return (
    <div className="edge">
      <span>{label}</span>
    </div>
  );
}

export function RunFigure() {
  return (
    <figure className="flowfig">
      <figcaption>
        <span>One run</span>
        <span>Sequential. The branch is the return value.</span>
      </figcaption>
      <div className="graph">
        <Node
          kicker="Start"
          title="run()"
          text="A new run id, a JSON input, and a checkpoint store. An id that is already stored is refused."
        />
        <Edge label="Save first. Status running." />
        <Node
          kicker="Each step"
          title="The function at next_step"
          text="It receives the run id, the input, and the dictionaries earlier steps returned."
        />
        <div className="split">
          <span>Dictionary</span>
          <span>Review request</span>
          <span>Exception</span>
        </div>
        <div className="fork">
          <Node
            kicker="Continue"
            title="Save and advance"
            text="The dictionary is stored under the step name. After the last step the status is completed."
          />
          <Node
            pause
            kicker="Pause"
            title="waiting_review"
            text="Later steps do not run. The payload stays on pending_review until resume()."
          />
          <Node
            kicker="Stop"
            title="failed"
            text="The error string is saved. The same exception is then raised to the caller."
          />
        </div>
      </div>
    </figure>
  );
}

export function ReviewFigure() {
  return (
    <figure className="flowfig">
      <figcaption>
        <span>Human review</span>
        <span>Approval continues. Rejection stops.</span>
      </figcaption>
      <div className="graph">
        <Node
          pause
          kicker="Paused"
          title="waiting_review"
          text="pending_review holds the step name and the payload the step supplied."
        />
        <Edge label="resume(run_id, decision, reviewer, store)" />
        <div className="split split-2">
          <span>Approved</span>
          <span>Rejected</span>
        </div>
        <div className="fork fork-2">
          <Node
            kicker="Continue"
            title="Next step runs"
            text="The review record is stored as that step's output. reviewer is required."
          />
          <Node
            kicker="Stop"
            title="rejected"
            text="Later steps are not called. The review record is still saved."
          />
        </div>
      </div>
    </figure>
  );
}

export function DocumentFigure() {
  return (
    <figure className="flowfig">
      <figcaption>
        <span>Document review</span>
        <span>No model. The caller sets requires_review.</span>
      </figcaption>
      <div className="graph">
        <Node
          kicker="1"
          title="validate_document"
          text="document_id, title, and content are nonempty strings. requires_review is a boolean. Strings come back stripped."
        />
        <Edge label="Then" />
        <Node
          kicker="2"
          title="review_document"
          text="The step does not read the document to decide. It follows the boolean."
        />
        <div className="split split-2">
          <span>requires_review is false</span>
          <span>requires_review is true</span>
        </div>
        <div className="fork fork-2">
          <Node
            kicker="No pause"
            title="auto_approved"
            text="decision is auto_approved. Reason is review_not_required."
          />
          <div className="graph">
            <Node
              pause
              kicker="Pause"
              title="ReviewRequest"
              text="The payload is the reason and the document. The run waits."
            />
            <div className="split split-2">
              <span>Approved</span>
              <span>Rejected</span>
            </div>
            <div className="fork fork-2">
              <Node
                kicker="Continue"
                title="approved"
                text="resume() stores the review and moves on."
              />
              <Node
                kicker="Stop"
                title="rejected"
                text="Finalize is never called."
              />
            </div>
          </div>
        </div>
        <Edge label="Only auto_approved or approved" />
        <Node
          kicker="3"
          title="finalize_document"
          text="Returns status ready, with the document id, the title, and the approval. A rejection does not reach this step."
        />
      </div>
    </figure>
  );
}

export function SeamFigure() {
  return (
    <figure className="flowfig">
      <figcaption>
        <span>Where the library stops</span>
        <span>The customer brings the stack.</span>
      </figcaption>
      <div className="graph">
        <Node
          kicker="Yours"
          title="Application"
          text="Schemas, rules, tools, credentials, and clients. This changes per customer. Orqmesh does not own it."
        />
        <Edge label="Your code calls" />
        <Node
          pause
          kicker="This package"
          title="Core"
          text="Workflow and AsyncWorkflow. Checkpoints. The review contract. A tool registry and a per-agent allowlist."
        />
        <Edge label="You inject the clients" />
        <Node
          kicker="Thin seams"
          title="Adapters"
          text="LangGraphAdapter, plus Azure Blob, Cosmos, and Content Understanding. No provider SDK is imported. Tested with fakes."
        />
        <Edge label="Stays outside" />
        <Node
          kicker="Not in the package"
          title="Elsewhere"
          text="The model, the database, identity, and the desk a person actually uses."
        />
      </div>
    </figure>
  );
}
