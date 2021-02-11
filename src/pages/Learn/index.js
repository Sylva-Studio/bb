
import {useShow} from '../../component/helper_fucs'

function index() {

  const [ set_ref, visible] = useShow({rootMargin : '-200px'})
  return (
    <div >
      <div style={new_sty} className="">
        <h3>Welcome to the beginning</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat nesciunt corrupti excepturi dignissimos maxime officia iusto temporibus aliquid deleniti recusandae rerum mollitia ipsa delectus officiis optio perferendis quam, suscipit quod?</p>
      </div>
      <div ref={set_ref} className={visible ? 'sty open':'sty'}>
      <h3>When i come, you will know</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, deserunt laboriosam? Deleniti, neque reprehenderit ullam officia necessitatibus natus tempora aliquid possimus odit ipsa nesciunt reiciendis sint consequatur veritatis beatae minima.</p>
      </div>
    </div>
  )
}

const new_sty = {
  backgroundColor : 'purple',
  height : '100vh',
  
}

const new_sty1 = {
  backgroundColor : 'tomato',
  height : '100vh',
}


export default index
