'use client'
import { Brain } from 'lucide-react';

const Header = () => {
    return (
        <div className='w-full pt-8 mb-3'>
            <div className='w-full m-auto'>
                <div className='flex gap-2 items-center'>
                    <Brain className='h-6 w-6 text-amber-500' data-testid="brain-icon" />
                    <div>
                        <h1 className='font-extrabold text-sm'>Personality Test</h1>
                        <p className='text-[10px] text-[rgb(100,116,139)] '>by Dobeen Kim</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Header