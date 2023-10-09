const React = require('react');

function CardProfile({ card, user, }) {
  
  return (
    <div className="card" style={{ width: '17rem' }} data-id={card.id} key={card.id}>
      <div className="card-body text-center" style={{color:'#5E071C'}}>
       {card.createdAt.toLocaleDateString('ru-Ru') }
      </div>
      <center>
        <img src={card.image} style={{ width: '200px', height: '200px' }} className="card-img-top img-thumbnail" alt="..." />
      </center>
      <div className="card-body text-center">
        <h6 className="card-title" style={{ color: '#5E071C' }}>{card.text}</h6>
        <a href={`/update/${card.id}`} type="button" data-id={card.id} className="js-update btn btn-warning btn-sm">Изменить</a>
        <button type="button" className="js-delete btn btn-warning btn-sm">Удалить</button>
      </div>
      </div>
  );
}

module.exports = CardProfile;