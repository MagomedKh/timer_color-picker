import { Flex } from "antd";
import Title from "antd/es/typography/Title";
import { FC } from "react";
import AddColorBtn from "../components/entities/AddColorBtn/AddColorBtn";
import ColorsList from "../components/entities/ColorsList/ColorsList";
import Page from "../components/ui/Page/Page";

export const PalettePage: FC = () => {
   return (
      <Page>
         <Title>Палитра</Title>

         <Flex align="baseline" justify="space-between">
            <Title level={3}>Список цветов</Title>
            <AddColorBtn />
         </Flex>

         <ColorsList />
      </Page>
   );
};
