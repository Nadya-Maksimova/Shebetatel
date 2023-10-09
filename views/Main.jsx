const React = require('react');
const Layout = require('./Layout');
const AddNewPost = require('./AddNewSch');
const PostCardMain=require('./PostCardMain')


function Main({title,user, cards,likes}) {
    return(
<Layout title={title} user={user}>
        { !user ? (
            <center>
    <h3 style={{'color':'black'}}>Чтобы отправить свой щебет, пожалуйста,зарегистрируйтесь</h3>
    <h2 style={{'color':'#600018'}}>Последние Щебеты</h2>
    <div className="row d-flex justify-content-between">
          {cards?.map((card) => (
          
            <PostCardMain user={user} card={card} key={card.id} likes={likes}/>
          ))}
        </div>
    </center>
        ):(
            <center>
<h4 style={{'color':'#F32B5C'}}>Новый щебет</h4>
<AddNewPost/>
<h4 style={{'color':'#F32B5C'}}>Последние щебеты</h4>
<div className="row d-flex justify-content-around">
          {cards?.map((card) => (
            <PostCardMain user={user} card={card} key={card.id} likes={likes}/>
          ))}
        </div>
</center>
        )
        }
</Layout>
    )
}

module.exports = Main;