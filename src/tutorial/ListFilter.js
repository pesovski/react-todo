import React from "react";

export default function ListFilter() {
  return (
    <div>
      <div className="w-50 m-auto d-flex justify-content-between">
        <button type="button" className="btn btn-light">
          All
        </button>
        <button type="button" className="btn btn-primary">
          None
        </button>
        <button type="button" className="btn btn-success">
          Low
        </button>
        <button type="button" className="btn btn-warning">
          Medium
        </button>
        <button type="button" className="btn btn-danger">
          High
        </button>
      </div>
      <div className="w-50 m-auto d-flex justify-content-between py-2">
        <button type="button" className="btn btn-light">
          All
        </button>
        <button type="button" className="btn btn-light">
          Active
        </button>
        <button type="button" className="btn btn-light">
          Completed
        </button>
        <button type="button" className="btn btn-secondary">
          Delete Completed
        </button>
      </div>
    </div>
  );
}
