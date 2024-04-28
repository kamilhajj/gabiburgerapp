import { createDrawerNavigator } from "@react-navigation/drawer";
import OnePlayer from '../screens/ListOfGames/OnePlayer';
import TwoPlayers from '../screens/ListOfGames/TwoPlayers';
import ThreePlayers from '../screens/ListOfGames/ThreePlayers';
import FourPlayers from '../screens/ListOfGames/FourPlayers';
import FivePlayers from '../screens/ListOfGames/FivePlayers';
import SixPlayers from '../screens/ListOfGames/SixPlayers';
import SevenPlayers from '../screens/ListOfGames/SevenPlayers';
import EightPlayers from '../screens/ListOfGames/EightPlayers';
const Drawer = createDrawerNavigator();
import { DrawerContent } from "../components/DrawerContent";
export default function GameDrawer() {
  return (
     <Drawer.Navigator screenOptions={{drawerStyle:{width:100}}} drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Group >
        <Drawer.Screen name="OnePlayer" component={OnePlayer} />
        <Drawer.Screen name="TwoPlayers" component={TwoPlayers} />
        <Drawer.Screen name="ThreePlayers" component={ThreePlayers} />
        <Drawer.Screen name="FourPlayers" component={FourPlayers} />
        <Drawer.Screen name="FivePlayers" component={FivePlayers} />
        <Drawer.Screen name="SixPlayers" component={SixPlayers} />
        <Drawer.Screen name="SevenPlayers" component={SevenPlayers} />
        <Drawer.Screen name="EightPlayers" component={EightPlayers} />
      </Drawer.Group>
    </Drawer.Navigator>
  );
}