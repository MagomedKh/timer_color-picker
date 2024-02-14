import { Space } from "antd";
import Title from "antd/es/typography/Title";
import { FC } from "react";
import { useSelector } from "react-redux";
import { selectColors } from "../../../store/slices/paletteSlice";
import ColorItem from "../ColorItem/ColorItem";

const ColorsList: FC = () => {
   const colors = useSelector(selectColors);

   return colors.length > 0 ? (
      <Space size="middle" wrap>
         {colors.map((color) => (
            <ColorItem color={color} key={color.id} />
         ))}
      </Space>
   ) : (
      <Title level={4} type="warning">
         Палитра пустая
      </Title>
   );
};

export default ColorsList;
