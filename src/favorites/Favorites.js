import React, { Fragment } from 'react'
import isLoggedId from '../isLoggedIn'
import TopTags from '../main/TopTags'
import KnowledgeElite from '../main/KnowledgeElite'
import Signup from '../main/Signup'
import Login from '../main/Login'
import QuestionContainer from '../question/QuestionsContainer'

const Favorites = ({ user }) =>
    <Fragment>
        <Signup />
        <Login />
        <div className="container-fluid">
            <div className="row pt-5 content-area">
                <TopTags />
                <div className="col-6">
                    <h2 className="text-center">Your Favorited Questions</h2>
                    <QuestionContainer />
                </div>
                <KnowledgeElite />
            </div>
        </div>
    </Fragment>

const C = isLoggedId(Favorites)
export default C