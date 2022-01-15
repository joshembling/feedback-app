import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);
  // if prop is not passed, or nothing exists in FeedbackData.js, return the no feedback statement
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  // if prop passed
  return (
    // map through the data given in FeedbackData.js {feedData}

    // the map pseudonym can be anything, called it data for more clarity (to know it's fetching from FeedbackData.js)

    // for each object returned, return the FeedbackItem component (that also contains the card comp) displaying the item prop (rating and text)
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((data) => (
          <motion.div
            key={data.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={data.id} item={data} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  // // if prop passed
  // return (
  //   // map through the data given in FeedbackData.js {feedData}

  //   // the map pseudonym can be anything, called it data for more clarity (to know it's fetching from FeedbackData.js)

  //   // for each object returned, return the FeedbackItem component (that also contains the card comp) displaying the item prop (rating and text)
  //   <div className='feedback-list'>
  //     {feedback.map((data) => (
  //       <FeedbackItem key={data.id} item={data} handleDelete={handleDelete2} />
  //     ))}
  //   </div>
  // );
}

// is array because it's taking array of objects from FeedbackData.js
// FeedbackList.propTypes = {
//   // item: PropTypes.array,

//   // This is optional - to show exactly what should be returned from FeedbackData
//   item: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       rating: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//     })
//   ),
// };

export default FeedbackList;
