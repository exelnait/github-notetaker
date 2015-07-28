import React from 'react';
import Router from 'react-router';
import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
import Notes from './Notes/Notes';
import ReactFireMixin from 'reactfire';
import Firebase from 'firebase';
import GithubAPI from '../utils/GithubAPI';

var Profile = React.createClass({
    mixins: [Router.State, ReactFireMixin],
    getInitialState: function () {
      return {
          notes: ['note1','note2'],
          bio: {},
          repos: []
      }
    },
    init: function () {
        var username = this.getParams().username;
        var childRef = this.ref.child(username);
        this.bindAsArray(childRef, 'notes');

        GithubAPI.getAllInfo(username).then(function (dataObj) {
            this.setState({
                bio: dataObj.bio,
                repos: dataObj.repos
            })
        }.bind(this));
    },
    componentDidMount: function () {
        this.ref = new Firebase('https://github-note-tracker.firebaseio.com');
        this.init();
    },
    componentWillUnmount: function () {
        this.unbind('notes');
    },
    componentWillReceiveProps: function () {
        this.unbind('notes');
        this.init();
    },
    handleAddNote: function (newNote) {
        this.ref.child(this.getParams().username).push({
            note: newNote
        });
    },
    render: function () {
        var username = this.getParams().username;
        return (
            <div className="row">
                <div className="col-md-4">
                    <UserProfile username={username} bio={this.state.bio}/>
                </div>
                <div className="col-md-4">
                    <Repos username={username} repos={this.state.repos}/>
                </div>
                <div className="col-md-4">
                    <Notes
                        username={username}
                        notes={this.state.notes}
                        addNote={this.handleAddNote}/>
                </div>
            </div>
        )
    }
});

export default Profile;