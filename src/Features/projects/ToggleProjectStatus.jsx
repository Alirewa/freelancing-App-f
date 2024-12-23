import React, { useState } from 'react'
import useToggleProjectStatus from './useToggleProjectStatus';
import Loading from '../../ui/Loading';
import Toggle from '../../ui/toggle';

function ToggleProjectStatus({project}) {
    const {status} = project
    const {isUpdating, toggleProject} = useToggleProjectStatus();
    const toggleHandler = () => {
        const newStatus = status === "OPEN" ? "CLOSE" : "OPEN";
        toggleProject({
            id: project._id,
            data: {status: newStatus},
        });
    };
  return (
    <div className='w-[5rem]'>
        {
            isUpdating ? ( <Loading height={20} width={50} /> ) : (<Toggle label={project.status === "OPEN" ? "باز" : "بسته"} enabled={project.status === "OPEN" ? true : false} onChange={toggleHandler}/>)
        }
        </div>
  )
}

export default ToggleProjectStatus