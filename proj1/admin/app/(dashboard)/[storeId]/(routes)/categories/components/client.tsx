'use client'
import ApiList from '@/components/ui/api-list'
import { Button } from '@/components/ui/button'
import { DataTable } from '@/components/ui/data-table'
import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import { Plus } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'
import React from 'react';
import { CategoriesColumn, columns } from './columns'

interface CategoriesClientProps {
    data: CategoriesColumn[]
}

export const CategoriesClient: React.FC<CategoriesClientProps> = ({ data }) => {
    const router = useRouter();
    const params = useParams();
    return (
        <>
            <div className='flex items-center justify-between'>
                <Heading
                    title={`Categories (${data.length})`}
                    description="Manage categories for your store" />
                <Button
                    onClick={() => router.push(`/${params.storeId}/categories/new`)}>
                    <Plus className='mr-2 h-4 w-4' />
                    Add New
                </Button>
            </div>
            <Separator />
            <DataTable columns={columns} data={data} searchKey='label' />
            <Heading title='API' description='API calls for categories' />
            <Separator />
            <ApiList entityName='categories' entityIdName='categoryId' />
        </>
    )
}