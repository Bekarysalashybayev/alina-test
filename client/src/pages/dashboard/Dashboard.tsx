import {FC} from "react";
import PageLayout from "@/components/layout/PageLayout.tsx";
import CharContainer from "@/components/ui/char-container/CharContainer.tsx";
import './dashboard.scss'
import ExchangeValute from "@/components/dashboard/ExchangeValute.tsx";
import SaleKz from "@/components/dashboard/SaleKz.tsx";
import Statistics from "@/components/dashboard/Statistics.tsx";
import Kpi from "@/components/dashboard/Kpi.tsx";

const Dashboard: FC = () => {
    return (
        <PageLayout>
            <CharContainer title="График курса валют" filter="Доллар">
                <div className="dashboard-row">
                    <div className='scroll-as'>
                        <ExchangeValute/>
                    </div>
                </div>
            </CharContainer>
            <div className="dashboard-row">
                <div className="col-3 scroll">
                    <CharContainer title="Продажи по Казахстану" filter="за год">
                        <SaleKz/>
                    </CharContainer>
                </div>
                <div className="col-5 scroll">
                    <CharContainer title="Статистика заявок" filter="за год">
                        <Statistics/>
                    </CharContainer>
                </div>
                <div className="col-2 scroll">
                    <CharContainer title="KPI" filter="за день">
                        <Kpi/>
                    </CharContainer>
                </div>
            </div>
        </PageLayout>
    );
};

export default Dashboard;
