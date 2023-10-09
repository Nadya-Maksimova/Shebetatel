const React = require('react');
const Layout=require('./Layout')
const CardProfile=require('./CardProfilePage')
const AddNewPostProfile = require('./AddNewPostProfile')

function Profile({user, cards}){
    return(
<Layout user={user}>
<center>
<h4 style={{'color':'#F32B5C'}}>Новый щебет</h4>
<AddNewPostProfile/>
<h4 style={{'color':'#F32B5C'}}>Мои щебеты</h4>
<div className="row d-flex justify-content-between">
          {cards?.map((card) => (
            <CardProfile user={user} card={card}/>
          ))}
        </div>
</center>
</Layout>
    )
}

module.exports = Profile;