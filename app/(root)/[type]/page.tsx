import Card from '@/components/Card';
import Sort from '@/components/Sort';
import { getFiles } from '@/lib/actions/file.actions';
import { SearchParamProps } from '@/types/FileTypes'
import { Models } from 'node-appwrite';
import React from 'react'

const page = async ({ params } :SearchParamProps) => {
    const type = (await params)?.type as string || "";
    
   const fiels = await getFiles()

  return (
    <div className='page-container'>
        <section className='w-full'>
            <h1 className='h1 capitalize'>{type}</h1>
            <div className='total-size-section'>
              <p className='body-1'>
                Total : <span className='h5'>0 MB</span>
              </p>
              <div className='sort-container'>
                <p className='body-1 hidden sm:block text-light-200'>Sort by:  </p>
                <Sort />
              </div>
            </div>
        </section>
        
        {/* RENDER FILES */}

        {fiels.total > 0 ? (
          <section>
    {fiels.documents.map((file:Models.Document) => (
        <h1 key={file.$id} className='h1'>
          <Card key={file.$id} file={file}/>
          </h1>
    ))}
          </section>
        ): <p className='empty-list'>No files to uplaoded</p>}
    </div>
  )
}

export default page
