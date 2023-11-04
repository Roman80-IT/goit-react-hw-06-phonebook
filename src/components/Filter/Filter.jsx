// export const Filter = ({ filter, onChange }) => {
//   return (
//     <>
//       <p>Find contacts by name</p>
//       <input
//         type="text"
//         name="filter"
//         value={filter}
//         onChange={event => onChange(event.target.value)}
//       />
//     </>
//   );
// };

import { useSelector, useDispatch } from 'react-redux';

export const Filter = () => {
  const filter = useSelector(state => state.contactsOperation.filter);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch({
      type: 'contactsOperation/setFilter',
      payload: event.target.value.trim(),
    });
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};
