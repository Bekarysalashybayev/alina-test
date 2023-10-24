import './table.scss';
import TableFilter from "@/components/table-filter/TableFilter.tsx";
import {FC, useEffect, useState} from "react";
import {TableOptions} from "@/components/table/types.ts";
import EditIcon from '@/assets/img/EditIcon.svg'
import DeleteIcon from '@/assets/img/DeleteIcon.svg'

const Table: FC<TableOptions> = ({filter, th, td, actions}) => {

    const [keyList, setKeyList] = useState<string[]>([])

    useEffect(() => {
        if (th && th.length) {
            th[0].forEach(e => {
                setKeyList(prevState => (
                    [...prevState, e.key]
                ))
            })
        }
    }, th)

    const editHandler = (val: string) => {
        if (actions?.editable && actions.onEdit) {
            actions.onEdit(val)
        }
    }
    const deleteHandler = (val: string) => {
        if (actions?.delete && actions.onDelete) {
            actions.onDelete(val)
        }
    }

    return (
        <div>
            <TableFilter search={filter?.search}/>
            <div className="table-row">
                <table className="c-table">
                    {th &&
                        <thead>
                        {th.map((tr, i) => (
                            <tr key={i}>
                                {tr.map((trh, j) => (
                                    <th key={j} rowSpan={trh.rowspan} colSpan={trh.colspan}>
                                        {trh.text}
                                    </th>
                                ))}
                            </tr>
                        ))}
                        </thead>
                    }

                    {td && (
                        <tbody>
                        {td.map((tdk, i) => (
                            <tr key={i}>
                                {keyList.map(e => (
                                    <td key={e}>{
                                        tdk[e]
                                    }</td>
                                ))}
                                {(actions?.delete || actions?.editable) && (
                                    <td>
                                        <div className="actions">
                                            {actions.editable &&
                                                <img
                                                    src={EditIcon}
                                                    alt="EditIcon"
                                                    onClick={() => editHandler(tdk[actions?.actionKey ?? 'id'])}
                                                />
                                            }
                                            {actions.delete &&
                                                <img
                                                    src={DeleteIcon}
                                                    alt="DeleteIcon"
                                                    onClick={() => deleteHandler(tdk[actions?.actionKey ?? 'id'])}
                                                />
                                            }
                                        </div>
                                    </td>
                                )}
                            </tr>
                        ))}
                        </tbody>
                    )}
                </table>
            </div>
        </div>
    );
};

export default Table;
