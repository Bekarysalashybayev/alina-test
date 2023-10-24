import {FC} from "react";
import PageLayout from "@/components/layout/PageLayout.tsx";
import AppForm from "@/components/app-form/AppForm.tsx";

const NewApplication: FC = () => {
    return (
        <PageLayout>
            <AppForm/>
        </PageLayout>
    );
};

export default NewApplication;
