import Card from '../../components/Card'
function Testimonial({ testimon }) {
  return (
    <Card className='light'>
      <p>{testimon.quote}</p>
      <div className="testimonial__client">
        <div className="testimonial__client-avatar">
          <img src={testimon.avatar} alt="" />
        </div>
        <div className="testimonial__client-details">
          <h6>{testimon.name}</h6>
          <small>{testimon.profession}</small>
        </div>
      </div>
    </Card>
  )
}

export default Testimonial
