import React from 'react'

const AnchorLinksComponents = (props: any) => {
  return (
	<a href={props.href} className={`text-white text-[0.75rem] xl:text-[1.2rem] font-primary_Medium px-8 py-4 cursor-pointer ${props.class}`}>
		{props.children}
    </a>
  )
}

export default AnchorLinksComponents