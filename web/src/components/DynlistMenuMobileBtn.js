import React from 'react';
import { Button } from 'react-bootstrap';
// import { Link } from 'gatsby';
// import styled from 'styled-components';
function MobileButton() {
  return (
    <Button variant="dark" className="rounded-circle pull-right">
      Filter icon goes here
    </Button>
  );
}
export default MobileButton;
// function MobileButton({ buttons }) {
//   const buttonList = buttons.map((btn) => {
//     if (btn.internalLink) {
//       return (
//         <Link key={btn.id} to={btn.to}>
//           <Button variant="dark" className="rounded-circle pull-right">
//             Filter
//           </Button>
//         </Link>
//       );
//     }
//     if (btn.externalLink) {
//       return (
//         <a key={btn.id} href={btn.href} target="_blank" rel="noopener noreferrer">
//           <Button variant="dark" className="rounded-circle pull-right">
//             Filter
//           </Button>
//         </a>
//       );
//     }
//     return null;
//   });
//   return buttonList;
// }
// export default MobileButton;
