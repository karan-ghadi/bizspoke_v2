import React from 'react'

const FormLabelComponent = (props: any) => {
  return (
	<>
		<label htmlFor={props.htmlfor} className={`block text-[1rem] font-primary_Variable font-medium leading-6 text-white`}>
			{props.children}
		</label>
	</>
  )
}

export default FormLabelComponent