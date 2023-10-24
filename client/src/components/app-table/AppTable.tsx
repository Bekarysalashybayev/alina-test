import Table from "@/components/table/Table.tsx";
import {useEffect, useState} from "react";
import {thList} from "@/components/app-table/constants.ts";
import Pagination from "@/components/pagination/Pagination.tsx";
import {useActions} from "@/hooks/useActions.ts";
import {useAppSelector} from "@/hooks/useAppSelector.ts";

const AppTable = () => {
    const {fetchApp, deleteApp} = useActions()
    const {applications, isLoading, error} = useAppSelector(state => state.application)
    const [searchValue, setSearchValue] = useState('')
    const [page, setPage] = useState(1)
    const filterOptions: FilterOptions = {
        search: {
            value: searchValue,
            onChange: setSearchValue,
            placeholder: 'Поиск',
        },
    }

    const editHandler = (val: string) => {
        console.log(val)
    }

    const deleteHandler = (val: string) => {
        deleteApp(parseInt(val))
        fetchApp(page)
    }

    useEffect(() => {
        fetchApp(page)
    }, [page])

    return (
        <div>
            {error && <div style={{color: "red", marginBottom: 25}}>{error}</div>}
            {isLoading && <div>Loading ...</div>}
            <Table
                filter={filterOptions}
                th={thList} td={applications.list}
                actions={{editable: true, delete: true, onEdit: editHandler, onDelete: deleteHandler}}
            />
            <br/>
            <br/>
            <Pagination currentPage={page} totalPage={applications.totalPages} changePage={val => setPage(val)}/>
        </div>
    );
};

export default AppTable;
