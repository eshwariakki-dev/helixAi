import { useState } from "react";
import {
  UploadCloud,
  Brain,
  FileText,
  CheckCircle,
} from "lucide-react";

import "../styles/upload/upload.css";

function Upload() {

  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {

    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }

  };

  return (

    <div className="upload-page">

      <div className="upload-header">

        <div>

          <h1>Incident Upload</h1>

          <p>
            Submit incidents for AI powered analysis and decision intelligence.
          </p>

        </div>

      </div>

      <div className="upload-grid">

        <div className="upload-form-card">

          <div className="form-row">

            <div className="form-group">

              <label>Domain</label>

              <select>

                <option>Manufacturing</option>
                <option>Healthcare</option>

              </select>

            </div>

            <div className="form-group">

              <label>Incident Type</label>

              <select>

                <option>Machine Failure</option>
                <option>Worker Safety</option>
                <option>Medicine Shortage</option>
                <option>ICU Capacity</option>

              </select>

            </div>

          </div>

          <div className="form-row">

            <div className="form-group">

              <label>Priority</label>

              <select>

                <option>Critical</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>

              </select>

            </div>

            <div className="form-group">

              <label>Location</label>

              <input
                type="text"
                placeholder="Plant A / Hospital B"
              />

            </div>

          </div>

          <div className="form-group">

            <label>Description</label>

            <textarea
              rows="6"
              placeholder="Describe the incident..."
            ></textarea>

          </div>

          <div className="upload-box">

            <UploadCloud size={48} />

            <h3>Drag & Drop Evidence</h3>

            <p>
              PDF, Images, CSV, DOCX
            </p>

            <input
              type="file"
              onChange={handleFileChange}
            />

          </div>

          {fileName && (

            <div className="selected-file">

              <FileText size={18} />

              <span>{fileName}</span>

            </div>

          )}

          <button className="analyze-btn">

            <Brain size={20} />

            Analyze Incident

          </button>

        </div>

        <div className="ai-card">

          <h2>AI Processing Pipeline</h2>

          <div className="pipeline">

            <div>

              <CheckCircle size={18}/>

              OCR & Document Reading

            </div>

            <div>

              <CheckCircle size={18}/>

              Incident Classification

            </div>

            <div>

              <CheckCircle size={18}/>

              Risk Prediction

            </div>

            <div>

              <CheckCircle size={18}/>

              Ripple Analysis

            </div>

            <div>

              <CheckCircle size={18}/>

              Executive Recommendation

            </div>

          </div>

          <div className="processing-note">

            <h3>Estimated Processing</h3>

            <h1>5-10 sec</h1>

            <p>
              AI analyzes uploaded evidence and prepares recommendations.
            </p>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Upload;