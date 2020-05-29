import React from "react"
import { Card , CardBody , CardImg , CardTitle , Breadcrumb , BreadcrumbItem } from "reactstrap"
import { Link } from 'react-router-dom'


    // in case of link we get info in form of props.contentname but in case we use constructor then we use this.props
    function RenderDish({dish}) {
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

    function RenderComments({comments}) {
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

    const DishDetail = (props) => {

        const dish = props.dish
            if( dish == null) {
                return (
                    <div></div>
                )
            }
        return (
            <div  className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12 '>
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>

                <div className="row">
                    <RenderDish dish = {props.dish} />
                    <RenderComments comments = {props.comments} />
                </div>
            </div>
        )
    }


export default DishDetail