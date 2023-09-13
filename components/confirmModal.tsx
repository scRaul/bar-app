import './confirmModal.css'
import Card from './card';
interface ConfirmationModalProps {
  message: string;
  onConfirm: () => void;
  onClose:()=> void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  message,
  onConfirm,
  onClose
}) => {
  return (
    <div className="detail-modal">
        <Card>
            <p>{message}</p>
            <button className="confirm bttn yes" onClick={onConfirm}>Confirm</button>
            <button className="confirm bttn no" onClick={onClose}>Cancel</button>
        </Card>
    </div>
  );
};

export default ConfirmationModal;
