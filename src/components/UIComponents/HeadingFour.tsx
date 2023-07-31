import React from 'react'

const HeadingFourComponent = (props: any) => {
  return (
  	<h4 className={`font-secondary_Bold text-[2rem] xl:text-[4.5rem] text-black-100 leading-tight ${props.className}`}>
		{props.children}
	</h4>
  )
}

export default HeadingFourComponent