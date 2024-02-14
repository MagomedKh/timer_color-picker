import { Menu, MenuProps } from "antd";
import { Header as AntdHeader } from "antd/es/layout/layout";
import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";

const items: MenuProps["items"] = [
   {
      label: "Таймер",
      key: "timer",
   },
   {
      label: "Палитра",
      key: "palette",
   },
];

const Header: FC = () => {
   const navigate = useNavigate();
   const { pathname } = useLocation();

   const handleClick: MenuProps["onClick"] = (e) => {
      const path = e.key;

      navigate(path);
   };

   return (
      <AntdHeader className={styles.header}>
         <Menu
            onClick={handleClick}
            selectedKeys={[pathname.slice(1)]}
            items={items}
            className={styles.nav}
            mode="horizontal"
         />
      </AntdHeader>
   );
};

export default Header;
