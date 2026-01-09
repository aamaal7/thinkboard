import React, { useState } from "react";
import { useNavigate } from "react-router";

const Detail = () => {
  const [board, setBoard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();
};

export default Detail;
