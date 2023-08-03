import React from 'react'

const SubHeadingOneComponent = (props: any) => {
  return (
	<h6 className='text-base xl:text-[1.5rem] font-secondary_Variable font-normal text-white capitalize opacity-50'>{props.children}</h6>
  )
}

export default SubHeadingOneComponent;