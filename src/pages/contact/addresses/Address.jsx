import "./address.css"

const Address = ({ state, address, phone, style }) => {
  return (
    <div className="bts_address_cont">
        <div>
            <h2 className="bts_address_state">{state}</h2>
            <div className="bst_address_location">
              <p style={{ fontWeight: '700 !important' }}>{address}</p>
              <div className="">
                <p>{phone}</p>
                <a  href="mailto:info@broadviewtechnicalsolutions.com">
                  <p className="hover:!text-[#FA931C]" style={{ fontWeight: '700' }}>info@broadviewtechnicalsolutions.com</p>
                </a>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Address

