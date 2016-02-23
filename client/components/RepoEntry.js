const React = require('react');
const Link = require('react-router').Link;

const RepoEntry = (props) => (
  <div className="row">
      <div className="col s12 m10">
        <div className="card white">
          <div className="card-content black-text" >
            <span className="card-title"><Link className="cyan-text lighten-2" to={`/repoProfile`}>{props.data.name}</Link></span>
              <div className="row">
                <p className="left-align col s12">Description: {props.data.description}</p>
              </div>
              <div className="row">
                <p className="col s4">Last updated: {props.data.updated_at}</p>
                <p className="col s4">Number of beginner tickets: {props.data.beginner_tickets}</p>
                <p className="col s4">Number of forks: {props.data.forks}</p>
              </div>
              <div className="row">
                <p className="left-align col s6">Organization: {props.data.org_name}</p>
                <p className="right-align col s6">{props.data.language}</p>
                <p className="left-align col s6" ><a className="cyan-text lighten-2" href={props.data.html_url} target="_blank">Repo on GitHub</a></p>
              </div>
          </div>
        </div>
      </div>
    </div>
);

module.exports = RepoEntry;