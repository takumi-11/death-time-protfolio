import React, { FC } from 'react'
import AddIcon from '@material-ui/icons/Add';

type Props = {
    onClick: () => void
}

const Button: FC<Props> = ({ onClick }) => {
    return (
        <button onClick={onClick} className="m-2 p-10 rounded-lg w-96 h-40 shadow-lg border-2 opacity-70 hover:bg-white hover:opacity-100">
            <AddIcon color='primary' fontSize="large" />
            <div className='text-gray-400' >追加</div>
        </button>
    )
}

export default Button
