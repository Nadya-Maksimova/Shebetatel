const React = require('react');

function PostCard({ card, user, cardName,likes=[] }) {
  const numberLikes = likes.filter((like) => like.schebetId === card.id);
  return (
    <div className="card" style={{ width: '17rem' }} data-id={card.id} key={card.id}>
      <div className="card-body text-center" style={{color:'#F32B5C'}}>
      {card.createdAt.toLocaleDateString('ru-RU') +' ' + card.createdAt.toString().slice(16,21)}
      </div>
      <div className="card-body text-center" style={{color:'#5E071C'}}>
       <h6 >{card.userName} щебечет:</h6> 
      </div>
      <div className="card-body text-center">
        <h5 className="card-title" style={{ color: 'blue' }}>{cardName}</h5>
      </div>
      <center>
        <img src={card.image} style={{ width: '200px', height: '200px' }} className="card-img-top img-thumbnail" alt="..." />
      </center>
      <div className="card-body text-center">
        <h6 className="card-title" style={{ color: '#5E071C' }}>{card.text}</h6>
      </div>
      <div >
        <div>
          <p data-id={card.id} className="likes">💖</p>
        </div>
          {numberLikes.length > 0 && <h3>{numberLikes.length}</h3>}
          <div/>
        </div>
    </div>             
  );
}

module.exports = PostCard;