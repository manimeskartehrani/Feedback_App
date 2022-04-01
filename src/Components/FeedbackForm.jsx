import { useState, useContext, useEffect } from "react"
import Card from "../shared/Card"
import Button from "../shared/Button"
import RatingSelect from "./RatingSelect"
import FeedbackContext from "../context/FeedbackContext"

const FeedbackForm = () => {
  const [text, setText] = useState("")
  const [rating, setRating] = useState(10)
  const [btnDisable, setBtnDisable] = useState(true)
  const [message, setMessage] = useState("")

  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext)

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisable(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])

  const handleTextChange = (event) => {
    if (text === "") {
      setBtnDisable(true)
      setMessage(null)
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisable(false)
      setMessage("Your message is less than 10 characters!")
    } else {
      setMessage(null)
      setBtnDisable(false)
    }

    setText(event.target.value)
  }

  const buttonClickHandler = () => {
    setBtnDisable(false)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      }

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback)
      } else {
        addFeedback(newFeedback)
      }

      setText("")
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2> How would you rate your service with us?</h2>
        {/* @todo - rating select component */}
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={text}
          />
          <Button
            type='submit'
            isDisable={btnDisable}
            onClickButton={buttonClickHandler}
          >
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
