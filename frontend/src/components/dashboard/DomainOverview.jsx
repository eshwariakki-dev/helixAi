import "../../styles/dashboard/domainOverview.css";

function DomainOverview(){

    return(

        <div className="domain-card">

            <h2>Domain Overview</h2>

            <div className="domain-item">

                <span>Manufacturing</span>

                <strong>78%</strong>

            </div>

            <div className="progress">

                <div
                className="fill manufacturing"
                ></div>

            </div>

            <div className="domain-item">

                <span>Healthcare</span>

                <strong>22%</strong>

            </div>

            <div className="progress">

                <div
                className="fill healthcare"
                ></div>

            </div>

        </div>

    );

}

export default DomainOverview;