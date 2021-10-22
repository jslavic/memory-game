import styled from "styled-components";

/** 
 * Provides flex-wrapper to stick header to top
 * and footer to bottom
 */

const ContainerWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
`;

export default ContainerWrapper