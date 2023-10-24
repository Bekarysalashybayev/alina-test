import {FC} from "react";
import PageLayout from "@/components/layout/PageLayout.tsx";
import AppTable from "@/components/app-table/AppTable.tsx";

const Application: FC = () => {
    return (
        <PageLayout>
            <AppTable />
        </PageLayout>
    );
};

export default Application;
