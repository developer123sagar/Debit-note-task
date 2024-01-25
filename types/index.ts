import React from "react";

export interface ITableColumn<T> {
    header: string;
    accessor: (data: T) => React.ReactNode;
    render?: (data: React.ReactNode) => React.ReactNode;
}

export interface ITableProps<T> {
    columns: ITableColumn<T>[];
    data?: T[];
}