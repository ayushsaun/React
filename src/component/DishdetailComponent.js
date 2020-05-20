import React , { Component } from "react"
import { Card , CardBody , CardImg , CardTitle } from "reactstrap"

class DishDetail extends Component {


    renderDish(dish) {
        if (dish != null) {
            return(
                
                    <div key={dish.id} className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                            <CardBody>
                            <CardTitle>{dish.name}</CardTitle> 
                                {dish.description}
                            </CardBody>
                        </Card>
                    </div>
                
            )
        }
    }

    renderComments(comments) {
        if(comments == null) {
            return (
                <div></div>
            )            
        }
        const Com = comments.map(comment => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                        &nbsp;
                        {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                             month: 'long',
                            day: '2-digit'
                        }).format(new Date(comment.date))}
                    </p>
                </li>
            )
        })

        return (
            <div className='col-12 col-md-5 m-1'>
                <h3>Comments</h3>
                <ul className='list-unstyled'>
                    {Com}
                </ul>

            </div>
        )
    }

    render() {

        const dish = this.props.dish
            if( dish == null) {
                return (
                    <div></div>
                )
            }
        const detail = this.renderDish(dish)
        const commentsTag = this.renderComments(dish.comments)
        return (
            <div  className="container">
                <div className="row">
                    {detail}
                    {commentsTag}
                </div>
            </div>
        )
    }
}

export default DishDetail