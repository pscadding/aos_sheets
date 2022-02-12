import './stattable.css';

interface StatTableProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const StatTable = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: StatTableProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <div className="WeaponTable">
      <table>
        <tr>
          <th>Melee Weapons</th>
          <th>Range</th>
          <th>Attacks</th>
          <th>To Hit</th>
          <th>To Wound</th>
          <th>Rend</th>
          <th>Damage</th>
        </tr>
        <tr>
          <td>Anom</td>
          <td>19</td>
          <td>Male</td>
        </tr>
        <tr>
          <td>Megha</td>
          <td>19</td>
          <td>Female</td>
        </tr>
        <tr>
          <td>Subham</td>
          <td>25</td>
          <td>Male</td>
        </tr>
      </table>
    </div>
  );
};
