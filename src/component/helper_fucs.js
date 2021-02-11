import React, { useEffect, useState } from 'react'

export const useShow = (options) => {
  const [ref, set_ref] = useState(null)
  const [visible, set_visible] = useState(false)
  
  useEffect(()=>{
    const observe = new IntersectionObserver( ([entry])=> {
      set_visible(entry.isIntersecting)
    }, options)
  
    if(ref) {
      observe.observe(ref)
    }
  
    return () => {
      if(ref){
        observe.disconnect(ref)
      }
    }
  
  }, [ref, options])
  return [set_ref, visible]
  }
  