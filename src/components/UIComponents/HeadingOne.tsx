import React from 'react'

const HeadingOneComponent = (props: any) => {
  return (
	<h1 className='text-[4rem] xl:text-[14.125rem] font-secondary_Variable font-semibold text-black-100 leading-none overflow-hidden relative'>
		{props.children}
  	</h1>
  )
}

export default HeadingOneComponent