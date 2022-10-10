import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowIcon } from '../assets';
import Spinner from '../components/spinner';
import { allScore } from '../helpers/api';

function Score() {
  const [scores, setScores] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    //prevent unnessecary re-render
    if (scores) return;
    setIsLoading(true);
    allScore().then((res) => {
      //sort and reverse
      const sortedScores = res.sort(
        (a, b) => parseFloat(a.score) - parseFloat(b.score)
      );
      const reversedScores = sortedScores.reverse();
      setScores(reversedScores);
      setIsLoading(false);
    });
  }, [scores]);

  return (
    <>
      {isLoading ? (
        <Spinner className={'spinner-position'}/>
      ) : (
        <>
          <button
            className='btn  btn-light '
            type='button'
            onClick={() => navigate('/')}
          >
            <ArrowIcon className='animate-icon' />
            Go back
          </button>
          <div className='table-responsive'>
            <table className='table table-striped table-light my-5  container'>
              <thead>
                <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>Name</th>
                  <th scope='col'>email</th>
                  <th scope='col'>age</th>
                  <th scope='col'>address</th>
                  <th scope='col'>occupation</th>
                  <th scope='col'>currentlyEmployed</th>
                  <th scope='col'>yrsEmployed</th>
                  <th scope='col'>score</th>
                </tr>
              </thead>
              <tbody>
                {scores?.map((score, index) => (
                  <tr key={index}>
                    <th scope='row'>{index + 1}</th>
                    <td>{score.user?.name}</td>
                    <td>{score.user?.email}</td>
                    <td>{score.user?.age}</td>
                    <td>{score.user?.address}</td>
                    <td>{score.user?.occupation}</td>
                    <td>
                      {score.user?.currentlyEmployed === true ? 'Yes' : 'No'}
                    </td>
                    <td>{score.user?.yrsEmployed}</td>
                    <td>{score.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
}

export default Score;
