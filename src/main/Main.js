import React, { Fragment } from 'react'
import Header from '../shared/Header'
import Profile from '../profile/Profile'
import isLoggedId from '../isLoggedIn'
import TopTags from './TopTags'
import KnowledgeElite from './KnowledgeElite'
import Signup from './Signup'
import QuestionContainer from '../question/QuestionsContainer'

const Main = ({ user }) =>
    <Fragment>
        <Header />
        <Signup />
        <div className="container-fluid">
            {user &&
                <Profile />
            }
            <div className="row content-area">
                <TopTags />
                <div className="col-6">
                    <h2 className="text-center">Your Latest Thread</h2>
                    <QuestionContainer />
                    
                </div>
                <KnowledgeElite />
            </div>
        </div>
    </Fragment>

const C = isLoggedId(Main)
export default C