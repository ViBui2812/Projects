import React from 'react'
import Button from '../components/ui/button/Button'
import Archive from '../components/icons/File/Archive';

const Demo = () => {
  return (
    <main>
        <p className='display-large'>Đây là thẻ P</p>
        <div className='bg-background-green text-text-primary'>Đây là background</div>
        <Button variant="Destructive" size="Medium" onClick={() => alert('Bạn muốn xóa ư?')}>Đây là nút</Button>
        <div>
            <Archive width="2rem" height="2rem" className='text-text-primary'strokeWidth={1}/>
        </div>
    </main>
  )
}

export default Demo