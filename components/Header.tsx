import Image from 'next/image'
import React from 'react'
import Search from './Search'
import FileUploader from './FileUploader'
import { Button } from './ui/button'

const Header = () => {
  return (
    <header className='header'>
    <Search />
      <div className='header-wrapper'>
      <FileUploader />
        <form>
            <Button type='submit' className='sign-out-button'>
                <Image src="/assets/icons/logout.svg" alt="logout" width={24} height={24} className='w-6'/>
            </Button>
        </form>
      </div>
    </header>
  )
}

export default Header
