import React, { Component } from "react"
import { Card , CardBody , CardImg , CardTitle , Breadcrumb , BreadcrumbItem , Button , Modal , ModalHeader , ModalBody , Label , Row} from "reactstrap"
import { Link } from 'react-router-dom'
import { Control , LocalForm , Errors } from 'react-redux-form'
import { Loading } from './LoadingComponent'

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

    function RenderComments({comments, addComment, dishId}) {
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
                    <CommentForm dishId={dishId} addComment={addComment} />
                </ul>

            </div>
        )
    }

    const DishDetail = (props) => {
        
        const dish = props.dish

        if(props.isLoading) {
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            )
        }

        else if(props.errMess) {
            return (
                <div className="container">
                    <div className="row">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            )
        }
        
        else if( dish == null) {
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
                    <RenderComments comments={props.comments}
                        addComment={props.addComment}
                        dishId={props.dish.id}
                    />
                </div>
            </div>
        )
    }

    const required = (val) => val && val.length
    const maxLength = (len) => (val) => !(val) || (val.length <= len) // this helps in ensuring that length entered in box is below the length given as parameter
    const minLength = (len) => (val) => val && (val.length >= len) // this helps in ensuring that length entered in box is above  the length given as parameter

    class CommentForm extends Component {
        
        constructor(props) {
            super(props)

            this.state = {
                isButtonClicked : false
            }

            this.toggleComment = this.toggleComment.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)
        }
        
        toggleComment() {
            return (
                this.setState({
                    isButtonClicked : !this.state.isButtonClicked
                })
            )
        }

        handleSubmit(values) {
            this.toggleComment()
            // with this when we click on submit it will be added to list of comments
            this.props.addComment(this.props.dishId, values.rating, values.author, values.comments);
        }

        render() {
            return(
                <div className="container">
                    <div className="row">
                        <Button outline onClick={this.toggleComment}><span className="fa fa-pencil fa-lg"></span>  Submit Comment</Button>
                        <Modal isOpen={this.state.isButtonClicked} toggle={this.toggleComment}>
                            <ModalHeader>Submit Comment</ModalHeader>
                            <ModalBody>
                                <LocalForm className="col-12" onSubmit={(values) => this.handleSubmit(values)}>
                                    <Row className="form-group">
                                        <Label htmlFor="rating">Rating</Label>
                                        <Control.select model=".rating" id="rating" name="rating" className="custom-select">
                                            <option value="one">1</option>
                                            <option value="two">2</option>
                                            <option value="three">3</option>
                                            <option value="four">4</option>
                                            <option value="five">5</option>
                                        </Control.select>
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="author">Your Name</Label>
                                        <Control.text model=".author" placeholder="Your Name" className="form-control" id="author" name="author"
                                         validators = {{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                         }} />
                                         <Errors className="text-danger" model=".author" 
                                        show="touched" messages={{
                                        required: 'Required' ,
                                        minLength: 'Must be greater than 2 characters' ,
                                        maxLength: 'Must be less than 15 characters'
                                        }}/>
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="comment">Comment</Label>
                                        <Control.textarea model=".message" className="form-control" id="message" name="message" rows="6"/>
                                    </Row>
                                    <Row>
                                        <Button type="submit" value="submit" color="primary">Submit</Button>
                                    </Row>
                                </LocalForm>
                            </ModalBody>
                        </Modal>
                    </div>
                </div>       
            )
        }
    }

export default DishDetail