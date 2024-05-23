import { RestaurantInfoCard } from "../components/restaurants-info-card.component";
import {
  StyledSearchBar,
  StyledList,
  SearchBarView,
  StyledSafeAreaView,
} from "./restaurants.styles";

export function RestaurantsScreen() {
  return (
    <>
      <StyledSafeAreaView>
        <SearchBarView>
          <StyledSearchBar placeholder="Search" />
        </SearchBarView>
        <StyledList>
          <RestaurantInfoCard />
        </StyledList>
      </StyledSafeAreaView>
    </>
  );
}
