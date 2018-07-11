import { remove } from "../../store/actions/";
import { getState } from "../../selectors/";

export const mapStateToProps = state => ({
  tasks: getState(state)
});

export const mapDispatchToProps = {
  remove
};
