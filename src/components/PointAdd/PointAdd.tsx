import React, { useState, ChangeEvent } from 'react';

interface ModalProps {
  onClose: () => void;
  onAdd: (data: FormData) => void;
}

interface FormData {
  point: string;
  uf: string;
  city: string;
  codigo: string;
}

export const PointAdd: React.FC<ModalProps> = ({ onClose, onAdd }) => {
  const [point, setPoint] = useState('');
  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');
  const [codigo, setCodigo] = useState('');

  const handlePointChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPoint(e.target.value);
  };

  const handleUfChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUf(e.target.value);
  };

  const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleCodigoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCodigo(e.target.value);
  };

  const handleAdd = () => {
    const formData: FormData = {
      point,
      uf,
      city,
      codigo,
    };
    onAdd(formData);
    onClose();
  };

  return (
    <div className="modal fade" tabIndex={-1} role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Adicionar Dados</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="point">Ponto</label>
                <input type="text" className="form-control" id="point" value={point} onChange={handlePointChange} />
              </div>
              <div className="form-group">
                <label htmlFor="uf">UF</label>
                <input type="text" className="form-control" id="uf" value={uf} onChange={handleUfChange} />
              </div>
              <div className="form-group">
                <label htmlFor="city">Cidade</label>
                <input type="text" className="form-control" id="city" value={city} onChange={handleCityChange} />
              </div>
              <div className="form-group">
                <label htmlFor="codigo">Código</label>
                <input type="text" className="form-control" id="codigo" value={codigo} onChange={handleCodigoChange} />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={onClose}>
              Cancelar
            </button>
            <button type="button" className="btn btn-primary" onClick={handleAdd}>
              Adicionar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
